import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import EditorJS, { OutputData } from '@editorjs/editorjs'
import { EDITOR_TOOLS, i18nConfig } from './EditorTools'
import './Editor.css'

interface EditorProps {
	data: OutputData | undefined
	setData: Dispatch<SetStateAction<OutputData | undefined>>
	holder: string
}

export default function Editor({ data, setData, holder }: EditorProps) {
	const editorInstance = useRef<EditorJS>()

	useEffect(() => {
		if (!editorInstance.current) {
			editorInstance.current = new EditorJS({
				holder: holder,
				tools: EDITOR_TOOLS as any,
				i18n: i18nConfig,
				data,
				placeholder: 'Описание',
				inlineToolbar: true,
				async onChange(api, event) {
					const data = await api.saver.save()
					setData(data)
				}
			})
		}

		return () => {
			if (editorInstance.current && editorInstance.current.destroy) {
				editorInstance.current.destroy()
				editorInstance.current = undefined
			}
		}
	}, [])

	return (
		<div
			id={holder}
			className='editor-container'
		/>
	)
}
