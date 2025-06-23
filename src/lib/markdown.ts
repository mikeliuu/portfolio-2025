import { MDXData } from "@/types";
import fs from "fs";
import path from "path";

const MARKDOWN_EXTENSIONS = [".md", ".mdx"];
const ENCODING_UTF8 = "utf-8";

function parseFrontmatter(fileContent: string) {
	const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
	const match = frontmatterRegex.exec(fileContent);
	const frontMatterBlock = match![1];
	const content = fileContent.replace(frontmatterRegex, "").trim();
	const frontMatterLines = frontMatterBlock.trim().split("\n");
	const mdxMetaData: Record<string, string> = {};

	frontMatterLines.forEach((line) => {
		const [key, ...valueArr] = line.split(": ");

		let value = valueArr.join(": ").trim();
		value = value.replace(/^['"](.*)['"]$/, "$1");

		// remove quotes
		mdxMetaData[key.trim()] = value;
	});

	return { metadata: mdxMetaData, content };
}

function getMDXFiles(dir: string) {
	return fs
		.readdirSync(dir)
		.filter((file) => MARKDOWN_EXTENSIONS.includes(path.extname(file)));
}

function readMDXFile(filePath: string) {
	const rawContent = fs.readFileSync(filePath, ENCODING_UTF8);

	return parseFrontmatter(rawContent);
}

export function getMDXData<T>(dir: string): MDXData<T>[] {
	const mdxFiles = getMDXFiles(dir);

	return mdxFiles.map((file) => {
		const { metadata, content } = readMDXFile(path.join(dir, file));
		const slug = path.basename(file, path.extname(file));

		return {
			metadata: metadata as T,
			slug,
			content,
		};
	});
}
