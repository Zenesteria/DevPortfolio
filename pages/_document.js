import React, { Component } from 'react'
import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class _document extends Component {
  render() {
    return (
      <Html>
            <Head/>
            <body className='text-black dark:text-white'>
                <Main/>
                <NextScript/>
            </body>
      </Html>
    )
  }
}
