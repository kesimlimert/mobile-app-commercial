type Props = {
  fillColor: string;
};

export default function Doc({ fillColor }: Props) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_896_409)">
        <path
          d="M20.8476 5.46876L15.8594 0.480377V5.46876H20.8476Z"
          fill={fillColor}
        />
        <path
          d="M13.2344 15.0938C13.2344 14.6407 13.6017 14.2734 14.0547 14.2734H21.3281V7.10938H15.0391C14.586 7.10938 14.2188 6.74209 14.2188 6.28906V0H3.00781C1.3493 0 0 1.3493 0 3.00781V24.9922C0 26.6507 1.3493 28 3.00781 28H18.3203C19.9788 28 21.3281 26.6507 21.3281 24.9922V15.9141H14.0547C13.6017 15.9141 13.2344 15.5468 13.2344 15.0938ZM4.10156 9.35156H13.3984C13.8515 9.35156 14.2188 9.71884 14.2188 10.1719C14.2188 10.6249 13.8515 10.9922 13.3984 10.9922H4.10156C3.64853 10.9922 3.28125 10.6249 3.28125 10.1719C3.28125 9.71884 3.64853 9.35156 4.10156 9.35156ZM4.10156 12.6328H11.2109C11.664 12.6328 12.0312 13.0001 12.0312 13.4531C12.0312 13.9062 11.664 14.2734 11.2109 14.2734H4.10156C3.64853 14.2734 3.28125 13.9062 3.28125 13.4531C3.28125 13.0001 3.64853 12.6328 4.10156 12.6328ZM4.10156 15.9141H11.2109C11.664 15.9141 12.0312 16.2813 12.0312 16.7344C12.0312 17.1874 11.664 17.5547 11.2109 17.5547H4.10156C3.64853 17.5547 3.28125 17.1874 3.28125 16.7344C3.28125 16.2813 3.64853 15.9141 4.10156 15.9141ZM13.3984 20.8359H4.10156C3.64853 20.8359 3.28125 20.4687 3.28125 20.0156C3.28125 19.5626 3.64853 19.1953 4.10156 19.1953H13.3984C13.8515 19.1953 14.2188 19.5626 14.2188 20.0156C14.2188 20.4687 13.8515 20.8359 13.3984 20.8359Z"
          fill={fillColor}
        />
        <path
          d="M27.7597 14.5137L24.4784 11.2325C24.1581 10.9121 23.6387 10.9121 23.3184 11.2325C22.998 11.5528 22.998 12.0722 23.3184 12.3926L25.1993 14.2734H21.3281V15.9141H25.1993L23.3184 17.795C22.998 18.1153 22.998 18.6347 23.3184 18.9551C23.4785 19.1153 23.6885 19.1953 23.8984 19.1953C24.1084 19.1953 24.3183 19.1153 24.4784 18.955L27.7597 15.6738C28.0801 15.3535 28.0801 14.8341 27.7597 14.5137Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_896_409">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
