'use client'

import React from 'react'
import { SelectField, useField, useAuth } from '@payloadcms/ui'
import type { SelectField as SelectFieldType } from 'payload'

type Props = {
    path: string
    field: SelectFieldType
}

export const RolesSelect: React.FC<Props> = ({ path, field }) => {
    const { user } = useAuth()
    const { value, setValue } = useField<string[]>({ path })

    // Filter options based on user role
    let options = field.options || []

    // If the user isn't loaded yet or we can't determine roles, default to safe options
    if (user) {
        const userRoles = (user.roles as unknown as string[]) || []

        // 1. Hide 'Super Admin' (admin) option for EVERYONE.
        // This prevents any user (even super admins) from creating new super admins via UI.
        options = options.filter((opt) => {
            const val = typeof opt === 'string' ? opt : opt.value
            return val !== 'admin'
        })

        // 2. If user is NOT a Super Admin (i.e. is client-admin), they can only assign 'user'
        if (!userRoles.includes('admin')) {
            options = options.filter((opt) => {
                const val = typeof opt === 'string' ? opt : opt.value
                return val === 'user'
            })
        }
    }

    // Note: SelectField usage in recent Payload versions expects specific props. 
    // Usually it takes `path` and `field` (configuration).

    // We construct a new field object with the filtered options
    const fieldWithFilteredOptions = {
        ...field,
        options,
    }

    return (
        <SelectField
            path={path}
            field={fieldWithFilteredOptions as any}  // Correct way to pass config
            value={value as string | string[]}
            onChange={(val: any) => setValue(val)}
        />
    )
}
