'use client'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const ColumnRowLabel: React.FC<RowLabelProps> = () => {
    const { data, rowNumber } = useRowLabel<{ title?: string }>()

    const label = data?.title
        ? `${rowNumber !== undefined ? rowNumber + 1 : ''}: ${data.title}`
        : `Column ${rowNumber !== undefined ? rowNumber + 1 : ''}`

    return <div>{label}</div>
}
