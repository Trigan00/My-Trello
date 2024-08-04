import EditorJS, { EditorConfig } from '@editorjs/editorjs'

export class EditorSingleton extends EditorJS {
	private static instance: EditorSingleton

	private constructor(configuration?: EditorConfig | string) {
		super(configuration)
	}

	public static getInstance(
		configuration?: EditorConfig | string
	): EditorSingleton {
		if (!EditorSingleton.instance) {
			EditorSingleton.instance = new EditorSingleton(configuration)
		}

		return EditorSingleton.instance
	}
}
