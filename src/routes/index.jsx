import { BrowserRouter } from "react-router-dom"
import { useAuth } from "../hooks/auth"
import { USER_ROLE } from "../utils/roles"

import { AppRoutes } from "./app.routes"
import { AdminRoutes } from "./admin.routes"
import { AuthRoutes } from "./auth.routes"

export function Routes() {
    const { user } = useAuth()

    function AccessRoute() {
        switch(user.role) {
            case USER_ROLE.ADMIN:
                return <AdminRoutes />
            case USER_ROLE.CUSTOMER:
                return <AppRoutes />
            default:
                return <AppRoutes />
        }
    }

    return (
        <BrowserRouter>
            {user ? <AccessRoute /> : <AuthRoutes />}
        </BrowserRouter>
    )
}