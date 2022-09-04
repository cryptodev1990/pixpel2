import "./Notification.scss"
import { Header } from "../../components";
import React from "react";
import ProfileButton from "../../components/Button/ProfileButton";


const menuList = [
	{
		id: 1,
		title: "ALL NEWS",
	},
	{
		id: 2,
		title: "ACTIVITIES",
	},
	{
		id: 3,
		title: "TRADE",
	},
	{
		id: 4,
		title: "PIXEL NEWS",
	},
	{
		id: 5,
		title: "SYSTEM MAIL",
	},
]



let temp = [];

const Notification = () => {

	const [componentArray, setComponentArray] = React.useState([]);
	const [profileButtonIndex, setProfileButtonIndex] = React.useState(0);

	const handleClick = (idx) => () => {
		setProfileButtonIndex(idx);
		temp.push(
			<div key={idx} className="flex flex-row justify-between pb-2 border-app-black border-b-2">
					<div className="w-3/4">
						<div className="flex flex-row gap-4 items-center">
							<input type="checkbox" className="appearance-none checked:bg-blue-500" />
							<div className="font-semibold text-lg">
								{menuList[idx].title}
							</div>
						</div>
						<div className="text-sm pl-9 text-gray-500 truncate">
							You have successfully withdraw 021100757 BNB at 2022-04-23 16:03:43(UTC). If this activity is not your own, please do not care about that.
						</div>
					</div>
					<div className="flex text-xs items-center text-gray-500">
						2022-04023 11:02:43
					</div>
			</div>
		);
		setComponentArray(temp);
		temp = [];
	};

	return (

		<>
			<div>
				<Header></Header>
				<div className="flex flex-row text-white px-14 w-full min-h-screen gap-8">
					<div className="flex flex-col w-1/5 bg-app-black rounded-xl h-80 px-5 py-6 gap-2">
						{
							menuList.map((menu, idx) => {
								return (
									<ProfileButton key={idx} title={menu.title} idx={idx} selected={profileButtonIndex === idx} handleClick={handleClick(idx)}/>
								)
							})
						}
					</div>
					<div className="flex flex-col w-4/5 gap-3">
						<div className="flex flex-row mt-2 mb-5 justify-between">
							<div className="font-semibold text-3xl">
								Notification
							</div>
							<div className="flex flex-row gap-2">
								<div className="grid bg-app-black h-full w-8 rounded-md items-center justify-items-center">
									<svg className="h-4 w-4 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="20 6 9 17 4 12" /></svg>
								</div>
								<div className="grid bg-app-black h-full w-8 rounded-md items-center justify-items-center">
									<svg className="h-4 w-4 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
								</div>
								<div className="grid bg-app-black h-full w-8 rounded-md items-center justify-items-center">
									<svg className="h-4 w-4 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
								</div>
							</div>
						</div>
						{componentArray}
						<div className="flex flex-row justify-between pb-2 border-app-black border-b-2">
								<div className="w-3/4">
									<div className="flex flex-row gap-4 items-center">
										<input type="checkbox" className="appearance-none checked:bg-blue-500" />
										<div className="font-semibold text-lg">
										WitWidth
										</div>
									</div>
									<div className="text-sm pl-9 text-gray-500 truncate">
										You have successfully withdraw 021100757 BNB at 2022-04-23 16:03:43(UTC). If this activity is not your own, please do not care about that.
									</div>
								</div>
								<div className="flex text-xs items-center text-gray-500">
									2022-04023 11:02:43
								</div>
						</div>
						<div className="flex flex-row justify-between pb-2 border-app-black border-b-2">
								<div className="w-3/4">
									<div className="flex flex-row gap-4 items-center">
										<input type="checkbox" className="appearance-none checked:bg-blue-500" />
										<div className="font-semibold text-lg">
											Withdraws
										</div>
									</div>
									<div className="text-sm pl-9 text-gray-500 truncate">
										You have successfully withdraw 021100757 BNB at 2022-04-23 16:03:43(UTC). If this activity is not your own, please do not care about that.
									</div>
								</div>
								<div className="flex text-xs items-center text-gray-500">
									2022-04023 11:02:43
								</div>
						</div>
						<div className="flex flex-row justify-between pb-2 border-app-black border-b-2">
								<div className="w-3/4">
									<div className="flex flex-row gap-4 items-center">
										<input type="checkbox" className="appearance-none checked:bg-blue-500" />
										<div className="font-semibold text-lg">
											Withdraws
										</div>
									</div>
									<div className="text-sm pl-9 text-gray-500 truncate">
										You have successfully withdraw 021100757 BNB at 2022-04-23 16:03:43(UTC). If this activity is not your own, please do not care about that.
									</div>
								</div>
								<div className="flex text-xs items-center text-gray-500">
									2022-04023 11:02:43
								</div>
						</div>
						<div className="flex flex-row justify-between pb-2 border-app-black border-b-2">
								<div className="w-3/4">
									<div className="flex flex-row gap-4 items-center">
										<input type="checkbox" className="appearance-none checked:bg-blue-500" />
										<div className="font-semibold text-lg">
											Withdraws
										</div>
									</div>
									<div className="text-sm pl-9 text-gray-500 truncate">
										You have successfully withdraw 021100757 BNB at 2022-04-23 16:03:43(UTC). If this activity is not your own, please do not care about that.
									</div>
								</div>
								<div className="flex text-xs items-center text-gray-500">
									2022-04023 11:02:43
								</div>
						</div>
						<div className="flex flex-row justify-between pb-2 border-app-black border-b-2">
								<div className="w-3/4">
									<div className="flex flex-row gap-4 items-center">
										<input type="checkbox" className="appearance-none checked:bg-blue-500" />
										<div className="font-semibold text-lg">
											Withdraws
										</div>
									</div>
									<div className="text-sm pl-9 text-gray-500 truncate">
										You have successfully withdraw 021100757 BNB at 2022-04-23 16:03:43(UTC). If this activity is not your own, please do not care about that.
									</div>
								</div>
								<div className="flex text-xs items-center text-gray-500">
									2022-04023 11:02:43
								</div>
						</div>
						<div className="flex flex-row justify-between pb-2 border-app-black border-b-2">
								<div className="w-3/4">
									<div className="flex flex-row gap-4 items-center">
										<input type="checkbox" className="appearance-none checked:bg-blue-500" />
										<div className="font-semibold text-lg">
											Withdraws
										</div>
									</div>
									<div className="text-sm pl-9 text-gray-500 truncate">
										You have successfully withdraw 021100757 BNB at 2022-04-23 16:03:43(UTC). If this activity is not your own, please do not care about that.
									</div>
								</div>
								<div className="flex text-xs items-center text-gray-500">
									2022-04023 11:02:43
								</div>
						</div>
						<div className="flex flex-row justify-between pb-2 border-app-black border-b-2">
								<div className="w-3/4">
									<div className="flex flex-row gap-4 items-center">
										<input type="checkbox" className="appearance-none checked:bg-blue-500" />
										<div className="font-semibold text-lg">
											Withdraws
										</div>
									</div>
									<div className="text-sm pl-9 text-gray-500 truncate">
										You have successfully withdraw 021100757 BNB at 2022-04-23 16:03:43(UTC). If this activity is not your own, please do not care about that.
									</div>
								</div>
								<div className="flex text-xs items-center text-gray-500">
									2022-04023 11:02:43
								</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Notification