// svg
import { IIconProps } from '~svg'
import cls from 'classnames'
import React, { memo } from 'react'

const BrightCoffee: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="56"
			height="56"
			viewBox="0 0 56 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<rect width="56" height="56" rx="7" fill="#485C44" />
			<path
				d="M25.04 24.983C26.5569 24.983 28.0737 24.9909 29.5906 24.98C30.4333 24.9742 31.2739 25.0282 32.1154 25.0412C32.2623 25.0395 32.4087 25.0605 32.5491 25.1033C33.0207 25.2638 33.1194 25.795 32.7466 26.1542C32.3495 26.5378 31.8979 26.8514 31.422 27.1344C30.0848 27.9309 28.6462 28.5232 27.2476 29.1981C26.0104 29.7955 24.7906 30.4277 23.5631 31.0427C23.3928 31.1265 23.2226 31.2104 23.0557 31.2976C22.8119 31.4284 22.7736 31.5353 22.8302 31.8061C23.0004 32.629 23.3618 33.3886 23.6388 34.1755C23.7486 34.4848 23.8836 34.7858 23.9887 35.0977C24.0287 35.2164 24.0444 35.2105 24.1453 35.1493C24.9114 34.6831 25.638 34.1578 26.393 33.6757C27.6698 32.8612 28.9599 32.0689 30.2793 31.3227C31.2562 30.7707 32.2456 30.2411 33.2475 29.7339C34.2162 29.2413 35.2015 28.7848 36.194 28.3417C37.7501 27.6462 39.3406 27.0354 40.9503 26.4758C42.4152 25.9664 43.8998 25.5141 45.3928 25.0903C47.0749 24.6124 48.7575 24.1373 50.4406 23.665C51.2761 23.4319 52.115 23.2105 52.9556 22.9942C53.1011 22.9619 53.2517 22.9585 53.3986 22.9842C53.4691 22.9935 53.534 23.027 53.5819 23.0787C53.6298 23.1305 53.6578 23.1972 53.6608 23.2671C53.6753 23.4348 53.6783 23.5954 53.4825 23.6935C53.2378 23.8163 52.9717 23.8658 52.7126 23.9341C50.7202 24.4602 48.7267 24.9821 46.7471 25.5531C44.9596 26.0696 43.1818 26.6099 41.4236 27.2132C39.7586 27.7867 38.117 28.4205 36.5107 29.1357C35.473 29.5968 34.4473 30.0827 33.4356 30.5975C31.6645 31.4988 29.9372 32.475 28.2538 33.5261C26.9769 34.3272 25.7184 35.1568 24.4462 35.9655C24.3292 36.0401 24.3454 36.1059 24.3832 36.194C24.7544 37.0567 25.1265 37.9189 25.4996 38.7805C25.8288 39.5421 26.1576 40.3036 26.4862 41.0652C26.5163 41.1275 26.5373 41.1937 26.5483 41.2618C26.5726 41.4765 26.5666 41.7053 26.3394 41.8022C26.1521 41.8818 25.9521 41.8911 25.761 41.7217C25.4945 41.4857 25.2102 41.2677 24.9399 41.0338C24.5722 40.7156 24.19 40.4137 23.8261 40.0914C23.5622 39.8579 23.2979 39.6252 23.0294 39.3972C22.6399 39.066 22.2581 38.7264 21.8772 38.3864C21.355 37.9194 20.8366 37.4491 20.3165 36.9796C19.4329 36.1831 18.5838 35.3505 17.7386 34.5146C17.6552 34.4328 17.5618 34.3616 17.4606 34.3025C17.3576 34.2425 17.2738 34.3025 17.1993 34.3779C16.9303 34.6441 16.7311 34.9623 16.5021 35.2608C14.8103 37.4885 13.2079 39.7778 11.6621 42.1061C11.4169 42.4759 11.1665 42.8424 10.9108 43.2057C10.7317 43.4614 10.4567 43.6421 10.1447 43.5126C9.95492 43.4333 9.83277 43.2975 9.82723 43.09C9.81021 42.4264 9.91236 41.7758 10.0579 41.1298C10.2005 40.5009 10.3282 39.8721 10.4657 39.2433C10.5699 38.7662 10.6823 38.2904 10.7857 37.8134C10.9223 37.1846 11.0522 36.5557 11.1883 35.9269C11.3016 35.4037 11.4212 34.8818 11.5357 34.3586C11.6761 33.716 11.8136 33.0733 11.9553 32.4169C11.4697 32.4009 10.9955 32.4428 10.521 32.4848C10.2631 32.5078 10.0034 32.5057 9.74424 32.5267C9.05262 32.585 8.35801 32.6105 7.66597 32.6667C7.05138 32.717 6.43594 32.7505 5.82093 32.7946C4.87564 32.8642 3.92992 32.948 2.97868 32.9354C2.84035 32.9354 2.70118 32.9354 2.56966 32.8734C2.29642 32.7405 2.21044 32.1859 2.58286 31.957C3.1851 31.5868 3.78096 31.2062 4.37341 30.8213C5.54726 30.0589 6.70635 29.2753 7.85068 28.4704C8.51421 28.0026 9.19264 27.5553 9.85107 27.0828C10.5882 26.555 11.3079 26.0042 12.0421 25.473C12.6039 25.0668 12.8891 24.4958 13.11 23.8729C13.3228 23.2722 13.5663 22.6806 13.7965 22.0854C14.0349 21.47 14.2715 20.8537 14.5124 20.2408C14.7001 19.7604 14.8954 19.2825 15.0823 18.8021C15.2642 18.3384 15.4429 17.8737 15.6186 17.4078C16.0016 16.3845 16.3472 15.3486 16.689 14.3111C16.7452 14.1392 16.7992 13.9338 17.0056 13.8328C17.3563 13.6613 17.7488 13.8235 17.8207 14.1987C17.9586 14.9202 18.0829 15.6446 18.2106 16.3682C18.3507 17.1649 18.4891 17.9614 18.6255 18.7577C18.6706 19.0222 18.7107 19.2884 18.7404 19.5542C18.76 19.7239 18.8332 19.7336 18.966 19.6594C19.344 19.4498 19.724 19.2402 20.1037 19.0335C20.619 18.7518 21.1345 18.4698 21.6504 18.1875C22.3203 17.8195 23.0081 17.4845 23.6997 17.1579C25.1834 16.4579 26.7216 15.897 28.2917 15.4123C30.3431 14.7777 32.4312 14.2805 34.5333 13.8382C37.2036 13.276 39.8918 12.8107 42.5846 12.371C43.9809 12.1426 45.3775 11.9139 46.7744 11.6847C46.8804 11.6675 46.9872 11.6533 47.0898 11.6881C47.2562 11.7442 47.3579 11.8419 47.3698 12.0343C47.3826 12.2439 47.3124 12.3898 47.1098 12.4535C46.8118 12.5479 46.4999 12.5692 46.1938 12.6212C45.4581 12.7464 44.7218 12.8694 43.9849 12.9901C43.3639 13.092 42.7425 13.1901 42.122 13.2916C41.4248 13.4052 40.7277 13.5167 40.0318 13.6357C39.3292 13.7556 38.6276 13.8804 37.9267 14.0101C37.1934 14.1459 36.4588 14.2771 35.7301 14.4335C34.4209 14.7139 33.1105 14.9877 31.8098 15.3063C29.6924 15.8249 27.603 16.431 25.5835 17.2519C24.1849 17.819 22.8485 18.5149 21.5291 19.2419C20.7281 19.6831 19.9241 20.1195 19.1171 20.5511C18.9771 20.6261 18.9043 20.7091 18.9307 20.8776C19.0048 21.3467 19.0656 21.8179 19.1312 22.2883C19.1933 22.7389 19.2537 23.19 19.3172 23.6406C19.3543 23.8997 19.3938 24.1582 19.4355 24.4162C19.478 24.6807 19.6517 24.8027 19.9037 24.8702C20.6919 25.0798 21.4972 25.0278 22.2982 25.0379C22.5254 25.0412 22.7548 25.0609 22.9719 24.954C23.3192 24.7809 23.6708 24.6153 24.024 24.4543C25.3758 23.8381 26.7377 23.2466 28.1312 22.7234C29.4776 22.2178 30.8348 21.7455 32.203 21.3065C33.5846 20.8659 34.9827 20.4815 36.3796 20.0933C37.7165 19.7218 39.0635 19.3898 40.4276 19.1324C41.3069 18.9648 42.1956 18.849 43.08 18.7107C43.944 18.5753 44.8127 18.4709 45.6763 18.3334C46.3122 18.2328 46.9565 18.1846 47.5975 18.1163C48.3134 18.04 49.0272 17.9377 49.7477 17.9088C50.0337 17.8974 50.2184 18.0345 50.2427 18.2517C50.2657 18.4613 50.0725 18.6742 49.8235 18.7128C49.4851 18.7635 49.1446 18.7866 48.8058 18.8252C48.2256 18.8919 47.6456 18.9599 47.0659 19.0289C46.4658 19.1016 45.8657 19.1755 45.2656 19.2507C44.5986 19.3345 43.9338 19.4372 43.2652 19.5257C42.6417 19.6095 42.0237 19.721 41.404 19.8267C40.7545 19.9377 40.1093 20.0702 39.4653 20.2077C38.569 20.3989 37.6777 20.611 36.7907 20.8365C35.7284 21.1082 34.6739 21.4064 33.6272 21.7311C31.2934 22.4544 28.9932 23.272 26.7267 24.1839C26.1497 24.4189 25.5865 24.6857 25.04 24.983ZM10.8632 41.7318C11.3965 40.9591 11.9357 40.1903 12.4622 39.4131C13.7059 37.5782 15.0048 35.7823 16.3808 34.0413C16.9818 33.2804 17.6096 33.2251 18.3008 33.8782C18.8277 34.3763 19.3469 34.8818 19.8722 35.3819C21.049 36.5033 22.2101 37.6432 23.4575 38.6879C23.9683 39.1163 24.485 39.5418 25.0136 39.9807C25.0404 39.8692 24.9872 39.8046 24.9595 39.7376C24.3062 38.1496 23.6503 36.562 23.0413 34.9585C22.6795 34.0061 22.2931 33.0612 22.0198 32.0781C21.8244 31.3709 22.0304 30.9106 22.6774 30.5543C22.7144 30.5338 22.7506 30.5124 22.788 30.4923C24.5646 29.5981 26.3368 28.6959 28.1444 27.8634C29.2795 27.3406 30.4133 26.8153 31.4586 26.1257C31.5638 26.0561 31.6778 25.9937 31.7868 25.8386C31.2914 25.8386 30.8458 25.8411 30.3997 25.8386C29.2157 25.831 28.0316 25.8117 26.8475 25.8151C25.0468 25.8201 23.246 25.8444 21.4452 25.8524C20.8068 25.8553 20.1726 25.8243 19.5542 25.6336C18.9924 25.4604 18.6766 25.0941 18.5898 24.5315C18.5081 24.0003 18.4391 23.4675 18.3625 22.9355C18.1281 21.3045 17.8926 19.6742 17.656 18.0446C17.5283 17.1697 17.4006 16.2952 17.2729 15.4123C17.2031 15.4543 17.2001 15.513 17.1818 15.5637C16.8571 16.4704 16.5434 17.3814 16.2029 18.2819C15.3785 20.4618 14.5805 22.6517 13.6671 24.7989C13.4186 25.3829 13.0466 25.8193 12.5337 26.1903C9.80978 28.1606 7.02371 30.047 4.23424 31.9281C4.17635 31.967 4.1206 32.009 4.02441 32.0769L6.07587 31.9511C7.33455 31.8734 8.5931 31.7963 9.85149 31.7197C10.6853 31.6702 11.5195 31.6103 12.3541 31.5847C12.8368 31.57 13.0257 31.8249 12.9232 32.2852C12.5381 34.0127 12.1507 35.7412 11.7608 37.4709C11.4464 38.88 11.1343 40.2897 10.8244 41.6999C10.8134 41.7125 10.807 41.7284 10.8062 41.745C10.8053 41.7616 10.8101 41.7781 10.8198 41.7917L10.8632 41.7318Z"
				fill="white"
			/>
			<path
				d="M16.8048 30.6042C15.9237 30.5371 14.9635 30.3556 14.0583 29.9456C14.0006 29.9193 13.9463 29.8864 13.8965 29.8475C13.7203 29.7108 13.6658 29.5075 13.7522 29.3273C13.7959 29.2377 13.8724 29.1679 13.9664 29.1318C14.0603 29.0958 14.1647 29.0963 14.2583 29.1332C14.6626 29.2782 15.061 29.4371 15.4798 29.5427C16.1838 29.7196 16.889 29.8592 17.6155 29.6878C18.0105 29.5947 18.3646 29.3998 18.7336 29.2422C18.8298 29.2002 18.9201 29.1445 19.0316 29.1407C19.2231 29.134 19.3921 29.1784 19.4648 29.3696C19.5376 29.5608 19.4912 29.7255 19.3252 29.8551C18.992 30.1145 18.6017 30.2642 18.2059 30.3895C17.7858 30.5224 17.3521 30.5849 16.8048 30.6042Z"
				fill="white"
			/>
			<path
				d="M14.4958 28.3974C14.4429 28.3987 14.3903 28.3896 14.341 28.3705C14.2917 28.3515 14.2468 28.3229 14.209 28.2865C14.1711 28.2501 14.141 28.2066 14.1204 28.1585C14.0999 28.1105 14.0893 28.0589 14.0893 28.0067C14.0926 27.8979 14.1379 27.7944 14.216 27.7173C14.294 27.6402 14.3989 27.5953 14.5094 27.5917C14.5646 27.5903 14.6196 27.5999 14.6709 27.62C14.7222 27.64 14.7689 27.6701 14.8082 27.7084C14.8474 27.7467 14.8784 27.7924 14.8992 27.8428C14.92 27.8932 14.9303 27.9472 14.9294 28.0016C14.9284 28.056 14.9164 28.1096 14.8938 28.1593C14.8713 28.209 14.8388 28.2536 14.7983 28.2906C14.7578 28.3276 14.7101 28.3561 14.6581 28.3745C14.6062 28.3929 14.5509 28.4007 14.4958 28.3974Z"
				fill="white"
			/>
			<path
				d="M16.5221 29.0233C16.2842 29.0233 16.1323 28.8783 16.1314 28.6502C16.1314 28.4138 16.2932 28.2562 16.5328 28.2616C16.7635 28.2667 16.9137 28.4192 16.9137 28.6494C16.9141 28.8728 16.7567 29.0233 16.5221 29.0233Z"
				fill="white"
			/>
			<path
				d="M19.2814 27.7917C19.2814 28.0248 19.1384 28.1732 18.9064 28.1761C18.6745 28.179 18.5072 28.0231 18.5072 27.7917C18.5072 27.5603 18.663 27.4144 18.8937 27.4165C19.1244 27.4186 19.2797 27.5708 19.2814 27.7917Z"
				fill="white"
			/>
		</svg>
	)
}

export default memo(BrightCoffee)
