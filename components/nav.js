import React from 'react';
import Link from 'next/link';

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link prefetch href='/home' as='/'>
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link prefetch href='/blog'>
                    <a>Blog</a>
                </Link>
            </li>
            <li>
                <Link prefetch href='/blog?slug=Hello%20World' as='/blog/Hello%20World'>
                    <a>Hello World</a>
                </Link>
            </li>
        </ul>

        <style jsx>{ `
            :global(body) {
              margin: 16px;
              font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
            }
            ul {
              display: flex;
            }
            nav > ul {
              padding: 4px 0px 4px;
            }
            li {
              display: flex;
              padding: 6px 8px;
            }
            li:first-child {
              display: flex;
              padding: 6px 8px 6px 0px;
            }
            a {
              color: #067df7;
              text-decoration: none;
              font-size: 13px;
            }
        ` }</style>
    </nav>
);

export default Nav;
