import { ROL } from "../enum/ROL"

export const isAdmin = (rol? :string | ROL):Boolean => {
    return rol==ROL.ADMINISTRADOR || false
}
export const isVet = (rol? :string | ROL):Boolean => {
    return rol==ROL.VETERINARIO || false
}
