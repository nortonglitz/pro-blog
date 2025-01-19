import { messagesTable, metaDescriptionTable, postsTable, userInfoTable } from "@/schemas/drizzle"

/** User Info */
export type UserInfo = typeof userInfoTable.$inferSelect
export type NewUserInfo = typeof userInfoTable.$inferInsert

/** Posts */
export type Post = typeof postsTable.$inferSelect
export type NewPost = typeof postsTable.$inferInsert

/** Messages */
export type Message = typeof messagesTable.$inferSelect
export type NewMessage = typeof messagesTable.$inferInsert

/** Meta Description */
export type MetaDescription = typeof metaDescriptionTable.$inferSelect
export type NewMetaDescription = typeof metaDescriptionTable.$inferInsert
