import { SVGProps } from "react"


export const Logo = (props: SVGProps<any>) => {
    return (
        <svg width="22" height="22" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="200" height="200" fill="#D9D9D9" />
            <line x1="21.5" y1="2.18557e-08" x2="21.5" y2="200" stroke="#C4C4C4" />
            <line x1="173.5" y1="2.18557e-08" x2="173.5" y2="200" stroke="#C4C4C4" />
            <line x1="200" y1="176.5" x2="-4.37114e-08" y2="176.5" stroke="#C4C4C4" />
            <line x1="200" y1="24.5" x2="-4.37114e-08" y2="24.5" stroke="#C4C4C4" />
            <path d="M64.4545 135V65.1818H88.8636C93.7273 65.1818 97.7386 66.0227 100.898 67.7045C104.057 69.3636 106.409 71.6023 107.955 74.4205C109.5 77.2159 110.273 80.3182 110.273 83.7273C110.273 86.7273 109.739 89.2045 108.67 91.1591C107.625 93.1136 106.239 94.6591 104.511 95.7955C102.807 96.9318 100.955 97.7727 98.9545 98.3182V99C101.091 99.1364 103.239 99.8864 105.398 101.25C107.557 102.614 109.364 104.568 110.818 107.114C112.273 109.659 113 112.773 113 116.455C113 119.955 112.205 123.102 110.614 125.898C109.023 128.693 106.511 130.909 103.08 132.545C99.6477 134.182 95.1818 135 89.6818 135H64.4545ZM72.9091 127.5H89.6818C95.2045 127.5 99.125 126.432 101.443 124.295C103.784 122.136 104.955 119.523 104.955 116.455C104.955 114.091 104.352 111.909 103.148 109.909C101.943 107.886 100.227 106.273 98 105.068C95.7727 103.841 93.1364 103.227 90.0909 103.227H72.9091V127.5ZM72.9091 95.8636H88.5909C91.1364 95.8636 93.4318 95.3636 95.4773 94.3636C97.5455 93.3636 99.1818 91.9545 100.386 90.1364C101.614 88.3182 102.227 86.1818 102.227 83.7273C102.227 80.6591 101.159 78.0568 99.0227 75.9205C96.8864 73.7614 93.5 72.6818 88.8636 72.6818H72.9091V95.8636ZM131.665 135.545C129.983 135.545 128.54 134.943 127.335 133.739C126.131 132.534 125.528 131.091 125.528 129.409C125.528 127.727 126.131 126.284 127.335 125.08C128.54 123.875 129.983 123.273 131.665 123.273C133.347 123.273 134.79 123.875 135.994 125.08C137.199 126.284 137.801 127.727 137.801 129.409C137.801 130.523 137.517 131.545 136.949 132.477C136.403 133.409 135.665 134.159 134.733 134.727C133.824 135.273 132.801 135.545 131.665 135.545Z" fill="#302208" />
        </svg>

    )
}