'use client'
import React from 'react'
import Link from 'next/link'

const ViewSubmissionsLink: React.FC<any> = ({ rowData }) => {
    // Safe fallback if rowData isn't fully populated yet
    if (!rowData || !rowData.targetForm) return null

    // Handle relationship data (could be ID or object)
    const formId = typeof rowData.targetForm === 'object' ? rowData.targetForm.id : rowData.targetForm

    // Hardcoded /admin path for stability
    const href = `/admin/collections/form-submissions?where[form][equals]=${formId}`

    return (
        <Link
            href={href}
            onClick={(e) => e.stopPropagation()}
            style={{ textDecoration: 'underline', fontWeight: '500', color: 'var(--theme-primary-500)' }}
        >
            View Submissions
        </Link>
    )
}

export default ViewSubmissionsLink
