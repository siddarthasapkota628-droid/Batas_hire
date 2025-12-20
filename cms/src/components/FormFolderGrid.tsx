'use client'
import React, { useEffect, useState } from 'react'
import { useConfig } from '@payloadcms/ui'


const FormFolderGrid: React.FC = () => {
    const config: any = useConfig()
    const adminRoute = config?.routes?.admin || '/admin'
    const [forms, setForms] = useState<any[]>([])
    const [stats, setStats] = useState<Record<string, number>>({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. Fetch Forms
                const resForms = await fetch('/api/forms?limit=100')
                const dataForms = await resForms.json()
                setForms(dataForms.docs)

                // 2. Fetch Submission Counts for each
                // Optimization: In a real large app, we would aggregate. 
                // Here we essentially fire N requests or use a where query.
                // Does Payload support aggregation? Not easily in API. 
                // We will just do a quick count fetch for each form.
                const newStats: Record<string, number> = {}
                await Promise.all(dataForms.docs.map(async (form: any) => {
                    const resSub = await fetch(`/api/form-submissions?where[form][equals]=${form.id}&limit=0`)
                    const dataSub = await resSub.json()
                    newStats[form.id] = dataSub.totalDocs
                }))
                setStats(newStats)

            } catch (error) {
                console.error('Error fetching form stats:', error)
            }
        }
        fetchData()
    }, [])

    if (forms.length === 0) return null

    return (
        <div style={{ marginBottom: '40px' }}>
            <h3 style={{ margin: '0 0 20px 0' }}>Browse by Form</h3>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px'
            }}>
                {forms.map(form => (
                    <a
                        key={form.id}
                        href={`${adminRoute}/collections/form-submissions?where[form][equals]=${form.id}`}
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            display: 'block',
                            padding: '20px',
                            backgroundColor: 'var(--theme-elevation-100)',
                            border: '1px solid var(--theme-elevation-200)',
                            borderRadius: '8px',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--theme-primary-500)'}
                        onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--theme-elevation-200)'}
                    >
                        <h4 style={{ margin: '0 0 10px 0' }}>{form.title}</h4>
                        <div style={{ fontSize: '0.9rem', color: 'var(--theme-elevation-800)' }}>
                            {stats[form.id] !== undefined ? `${stats[form.id]} Submissions` : 'Loading...'}
                        </div>
                    </a>
                ))}
            </div>
            <hr style={{ margin: '30px 0', borderColor: 'var(--theme-elevation-200)' }} />
        </div>
    )
}

export default FormFolderGrid
