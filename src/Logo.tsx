import { SVGAttributes } from "react"

interface logoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: logoProps) {
  return (
    <svg
      width={150}
      height={120}
      viewBox="0 0 150 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M150 60.014c0-8.927-12.444-17.386-31.523-22.632 4.403-17.469 2.446-31.367-6.176-35.816C110.314.522 107.99.027 105.452.027v6.125c1.407 0 2.538.248 3.486.715 4.158 2.142 5.962 10.3 4.556 20.791-.337 2.582-.887 5.301-1.56 8.076-5.992-1.319-12.535-2.335-19.415-2.994-4.127-5.082-8.408-9.696-12.719-13.733 9.968-8.323 19.324-12.882 25.683-12.882V0c-8.408 0-19.415 5.383-30.544 14.722C63.809 5.438 52.803.11 44.395.11v6.125c6.329 0 15.715 4.532 25.682 12.8A133.955 133.955 0 0057.45 32.74c-6.91.659-13.453 1.675-19.446 3.021a75.28 75.28 0 01-1.59-7.965c-1.436-10.492.337-18.65 4.465-20.82.917-.494 2.11-.714 3.516-.714V.137c-2.569 0-4.892.495-6.91 1.538-8.592 4.45-10.518 18.32-6.085 35.734C12.383 42.682 0 51.115 0 60.014 0 68.94 12.444 77.4 31.523 82.646c-4.403 17.468-2.446 31.366 6.176 35.816 1.987 1.044 4.31 1.538 6.88 1.538 8.407 0 19.414-5.383 30.543-14.722 11.13 9.284 22.136 14.612 30.545 14.612 2.568 0 4.892-.494 6.909-1.538 8.592-4.45 10.518-18.32 6.085-35.734C137.617 77.372 150 68.913 150 60.014zm-39.808-18.32c-1.132 3.543-2.538 7.196-4.128 10.849a126.818 126.818 0 00-4.005-6.592c-1.407-2.197-2.905-4.34-4.403-6.427 4.342.577 8.53 1.29 12.536 2.17zM96.188 70.945c-2.385 3.708-4.83 7.224-7.368 10.492-4.556.358-9.173.55-13.82.55-4.617 0-9.234-.192-13.759-.522a150.371 150.371 0 01-7.399-10.437 138.535 138.535 0 01-6.36-10.932c1.896-3.68 4.037-7.36 6.33-10.959 2.385-3.708 4.83-7.224 7.368-10.492 4.556-.357 9.173-.55 13.82-.55 4.617 0 9.234.193 13.759.523a150.371 150.371 0 017.399 10.437 138.468 138.468 0 016.359 10.931 148.74 148.74 0 01-6.329 10.96zm9.876-3.57a109.89 109.89 0 014.219 10.931c-4.005.88-8.224 1.62-12.597 2.198 1.499-2.115 2.997-4.285 4.403-6.51a151.517 151.517 0 003.975-6.62zM75.061 96.68c-2.843-2.637-5.687-5.575-8.5-8.789 2.752.11 5.565.192 8.408.192 2.875 0 5.718-.055 8.5-.192a111.394 111.394 0 01-8.408 8.79zM52.313 80.504c-4.341-.577-8.53-1.291-12.535-2.17 1.131-3.543 2.538-7.196 4.127-10.85a126.55 126.55 0 004.006 6.592 179.686 179.686 0 004.402 6.428zm22.595-57.158c2.844 2.637 5.687 5.576 8.5 8.79-2.752-.11-5.564-.193-8.408-.193-2.874 0-5.718.055-8.5.192a111.359 111.359 0 018.408-8.789zM52.283 39.524c-1.498 2.115-2.996 4.285-4.403 6.51a150.952 150.952 0 00-3.975 6.591 109.837 109.837 0 01-4.219-10.931 163.609 163.609 0 0112.597-2.17zm-27.67 34.388C13.789 69.764 6.788 64.326 6.788 60.014c0-4.313 7.001-9.778 17.825-13.898 2.63-1.016 5.503-1.923 8.469-2.774 1.743 5.383 4.036 10.986 6.88 16.727-2.814 5.713-5.076 11.288-6.788 16.644-3.027-.851-5.901-1.785-8.561-2.801zm16.449 39.249c-4.158-2.142-5.962-10.3-4.556-20.792.337-2.582.887-5.301 1.56-8.075 5.992 1.318 12.535 2.335 19.415 2.994 4.127 5.081 8.408 9.695 12.719 13.733-9.968 8.322-19.324 12.881-25.683 12.881-1.376-.027-2.538-.274-3.455-.741zm72.523-20.93c1.437 10.493-.336 18.65-4.464 20.82-.917.494-2.109.714-3.516.714-6.329 0-15.715-4.532-25.682-12.799 4.28-4.038 8.56-8.624 12.627-13.706 6.91-.659 13.453-1.675 19.446-3.021.703 2.774 1.253 5.438 1.589 7.993zm11.772-18.32c-2.63 1.017-5.504 1.923-8.47 2.775-1.742-5.384-4.035-10.987-6.879-16.727 2.813-5.713 5.076-11.289 6.788-16.645 3.027.852 5.901 1.786 8.591 2.802 10.824 4.147 17.825 9.586 17.825 13.898-.03 4.312-7.032 9.778-17.855 13.898z"
        fill="#81D8F7"
      />
      <path
        d="M74.97 72.566c7.716 0 13.972-5.62 13.972-12.552 0-6.933-6.256-12.552-13.973-12.552-7.716 0-13.972 5.62-13.972 12.552 0 6.932 6.255 12.552 13.972 12.552z"
        fill="#81D8F7"
      />
    </svg>
  )
}