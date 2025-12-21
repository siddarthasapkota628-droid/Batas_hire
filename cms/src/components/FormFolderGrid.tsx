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
                // 1. Fetch Dashboard Cards
                const resDash = await fetch('/api/form-dashboards?limit=100&sort=priority')
                const dataDash = await resDash.json()
                setForms(dataDash.docs) // These are now Dashboard Config objects

                // 2. Fetch Submission Counts for each linked Target Form
                const newStats: Record<string, number> = {}
                await Promise.all(dataDash.docs.map(async (entry: any) => {
                    // Check if targetForm exists (it might be deleted)
                    const formId = entry.targetForm?.id || entry.targetForm // ID or Object depending on depth
                    if (!formId) return

                    const resSub = await fetch(`/api/form-submissions?where[form][equals]=${formId}&limit=0`)
                    const dataSub = await resSub.json()
                    newStats[entry.id] = dataSub.totalDocs
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
                {forms.map(entry => {
                    const formId = entry.targetForm?.id || entry.targetForm
                    if (!formId) return null

                    return (
                        <a
                            key={entry.id}
                            href={`${adminRoute}/collections/form-submissions?where[form][equals]=${formId}`}
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
                            <h4 style={{ margin: '0 0 10px 0' }}>{entry.title}</h4>
                            <div style={{ fontSize: '0.9rem', color: 'var(--theme-elevation-800)' }}>
                                {stats[entry.id] !== undefined ? `${stats[entry.id]} Submissions` : 'Loading...'}
                            </div>
                        </a>
                    )
                })}
            </div>
            <hr style={{ margin: '30px 0', borderColor: 'var(--theme-elevation-200)' }} />
        </div>
    )
}

export default FormFolderGrid
