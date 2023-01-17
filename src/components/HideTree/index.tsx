import { useAuth } from '@features/Auth';
import React, { ReactNode } from 'react'

interface HideTreeProps {
    roles: string[];
    children: ReactNode
}

const HideTree: React.FC<HideTreeProps> = ({ roles, children }) => {

    const { user_role } = useAuth()
    const isAllowed = roles.includes(user_role)

    return (
        <>{!isAllowed && children}</>
    )
}

export default HideTree