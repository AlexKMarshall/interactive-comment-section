import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    String: string,
    ID: string,
    DateTime: any,
    Boolean: boolean,
}

export interface Comment {
    author: User
    content: Scalars['String']
    createdAt?: Scalars['DateTime']
    id: Scalars['ID']
    __typename: 'Comment'
}

export interface Query {
    getComments?: (Comment | undefined)[]
    __typename: 'Query'
}

export interface User {
    avatarSrc?: Scalars['String']
    id: Scalars['ID']
    username: Scalars['String']
    __typename: 'User'
}

export interface CommentRequest{
    author?: UserRequest
    content?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    getComments?: CommentRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserRequest{
    avatarSrc?: boolean | number
    id?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Comment_possibleTypes = ['Comment']
export const isComment = (obj?: { __typename?: any } | null): obj is Comment => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isComment"')
  return Comment_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const User_possibleTypes = ['User']
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}


export interface CommentPromiseChain{
    author: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    content: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>})
}

export interface CommentObservableChain{
    author: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    content: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>})
}

export interface QueryPromiseChain{
    getComments: ({get: <R extends CommentRequest>(request: R, defaultValue?: ((FieldsSelection<Comment, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<Comment, R> | undefined)[] | undefined)>})
}

export interface QueryObservableChain{
    getComments: ({get: <R extends CommentRequest>(request: R, defaultValue?: ((FieldsSelection<Comment, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<Comment, R> | undefined)[] | undefined)>})
}

export interface UserPromiseChain{
    avatarSrc: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    username: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface UserObservableChain{
    avatarSrc: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    username: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}