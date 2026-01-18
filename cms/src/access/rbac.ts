import type { Access } from 'payload'

export const checkRole = (
    resource: string,
    action: 'read' | 'create' | 'update' | 'delete' = 'read',
): Access => {
    return ({ req: { user } }) => {
        if (!user) return false
        if (user.roles?.includes('admin')) return true

        // Flatten all permissions from all relevant roles
        const permissions = (user.associatedRoles || [])
            .flatMap((r: any) => typeof r === 'object' ? r.permissions || [] : [])
            .filter((p: any) => {
                if (p.resource !== resource) return false
                if (p.action === 'manage') return true
                // Implicit Read rule: If we are checking for 'read', allow ANY other right to suffice
                if (action === 'read') {
                    return ['read', 'create', 'update', 'delete'].includes(p.action)
                }
                return p.action === action
            });

        if (permissions.length === 0) return false;

        // Check Global Access (Any matching permission with no specific pages)
        if (permissions.some((p: any) => !p.specificPages?.length)) return true;

        // Collect Granular IDs
        const allowedIds = permissions.flatMap((p: any) =>
            (p.specificPages || []).map((page: any) => typeof page === 'object' ? page.id : page)
        );

        if (allowedIds.length > 0) {
            if (action === 'create') return false;
            return { id: { in: allowedIds } };
        }

        return false;
    }
}
