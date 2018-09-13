import { setStore, getStore, removeStore, setS_Store, getS_Store } from 'src/configs/storage'

const TokenKey = 'Admin-Token'
const RoleKey = 'Admim-Role'
const NameKey = 'User'
/**
 * 移除token
 */
export const removeToken = () => removeStore(TokenKey)

/**
 * 设置token
 */
export const setToken = (token) => setStore(TokenKey, token)

/**
 * 获取token
 */
export const getToken = () => getStore(TokenKey)

/**
 * 设置角色
 */
export const setRole = (role) => setStore(RoleKey, role)

/**
 * 获取角色
 */
export const getRole = () => getStore(RoleKey)

/**
 * 设置用户名
 */
export const setName = (name) => setS_Store(NameKey, name)
/**
 * 获取用户名
 */
export const getName = () => getS_Store(NameKey)

