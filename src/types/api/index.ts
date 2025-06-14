export interface PageProps {
  [key: string]: any
}

export interface GetStaticPropsContext {
  locale: string
  [key: string]: any
}

export interface GetStaticPropsResult {
  props: {
    [key: string]: any
  }
}
