'use client'

import Editor from '@/components/Editor/Editor'
import { OutputData } from '@editorjs/editorjs'
import { Box } from '@mui/material'
import { Dispatch, SetStateAction, useState } from 'react'

interface DescriptionI {
	description: OutputData | undefined
	setDescription: Dispatch<SetStateAction<OutputData | undefined>>
	holder: string
}

export default function Description({
	description,
	setDescription,
	holder
}: DescriptionI) {
	return (
		<Box
			sx={{
				p: 1,
				mt: 2,
				border: `1px solid rgba(0, 0, 0, 0.23)`,
				borderRadius: '15px',
				'&.editor-container.codex-editor.codex-editor__redactor': {
					paddingBottom: '100px'
				}
			}}
		>
			<Editor
				data={description}
				setData={setDescription}
				holder={holder}
			/>
		</Box>
	)
}
