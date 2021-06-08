import Head from 'next/head'
import Link from 'next/link'
import { perPage } from '../config';
import ErrorMessage from './ErrorMessage'

export default function Pagination({ page, data }) {
    // const { Error } = data;
    // if (Error) return <ErrorMessage error={Error} />;
    const { Error } = data;
    const { count } = data.Search.length;
    console.log('count', count)
    const pageCount = Math.ceil(count / perPage);
    // if (Error) return <ErrorMessage />;

    return (
        <div>
            <Link href={`/search/${page - 1}`}>
            <a aria-disabled={page <= 1}>Prev</a>
            </Link>
            <p>Page {page} of {pageCount}</p>
            <p>{count} total search results</p>
            <Link href={`/search/${page + 1}`}>
                <a aria-disabled={page >= 1}>
                    Next
                </a>
            </Link>
        </div>
    )
}