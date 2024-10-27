export const queryKeys = {
  AUTH: 'auth',
  GET_ACCESS_TOKEN: 'getAccessToken',
  GET_PROFILE: 'getProfile',
  MARKER: 'marker',
  GET_MARKER: 'getMarkers',
  POST: 'post',
  GET_POST: 'getPost',
  GET_POSTS: 'getPosts',
  FAVORITE: 'Favorite',
  GET_FAVORITE_POSTS: 'getFavoritePosts',
  GET_SEARCH_POSTS: 'getSearchPosts',
  GET_CALENDAR_POSTS: 'getCalendarPosts',

  NOTICE: 'notice',
  GET_NOTICE: 'getNotice',
  GET_NOTICE_DETAIL: 'getNoticeDetail',
} as const;

export const storageKeys = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
} as const;
