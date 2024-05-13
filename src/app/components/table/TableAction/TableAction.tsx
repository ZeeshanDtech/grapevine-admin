import React, { Children } from "react";
import BsButton from "../../BsButton/BsButton";
import Swal from "sweetalert2";

import "sweetalert2/src/sweetalert2.scss";
import Authorization from "../../Authorization/Authorization";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/root-reducer";


interface TableActionProps {
	// type: string;
	setting: any;
	data: any;
	className?: string;
	label?: string;
	labelFn?: any;
	actionHandler?: any;
	toggleUserStatus?: (data: any) => void;
	updateStatistics: () => void;
}
const TableAction: React.FC<TableActionProps> = ({
	setting,
	data,
	toggleUserStatus,
	updateStatistics,
}) => {
	const { id: currentUserId } =
		useSelector((state: RootState) => state.profile?.data) || {};

	const handleClick = () => {
		Swal.fire({
			title: "Status",
			text: `Do you want to ${data.status === 1 ? "deactivate" : "activate"
				} this user?`,
			icon: "question",
			showCancelButton: true,
			confirmButtonText: "Continue",
		}).then(async (result) => {
			if (result.isConfirmed) {
				if (toggleUserStatus) {
					await toggleUserStatus(data);
				}
				if (updateStatistics) {
					await updateStatistics();
				}
			}
		});
	};

	switch (setting.type) {
		case "btn-icon":
			return (
				<Authorization
					actions={setting.actions}
					modules={setting.modules}
				>
					<button
						className={setting.className}
						onClick={() => setting.handler(data)}
					>
						<i className={setting.icon.class}></i>
					</button>
				</Authorization>
			);
		case "btn-text-icon":
			return (
				<Authorization
					actions={setting.actions}
					modules={setting.modules}
					customValidate={{
						isCurrentUser: false,
						isSuperAdmin: false,
						dataId: data.id
					}}
				>
					<>
						{data.status === 1 && (
							<BsButton
								className="ms-2 d-inline-flex flex-center gap-2"
								padding="tableActionBtn"
								color="primary"
								rounded={25}
								fontSize="14"
								onClick={handleClick}
							>
								Activate{" "}
								<i className="fa-solid fa-circle ps-1 pe-0"></i>
							</BsButton>
						)}
						{data.status === 0 && (
							<BsButton
								className="ms-2 d-inline-flex flex-center gap-2"
								padding="tableActionBtn"
								color="primary"
								rounded={25}
								fontSize="14"
								onClick={handleClick}
							>
								<i className="fa-solid fa-circle ps-0 pe-1"></i>{" "}
								Deactivate
							</BsButton>
						)}
					</>
				</Authorization>
			);
		case "btn-text":
			return (
				<Authorization
					actions={setting.actions}
					modules={setting.modules}
				>
					<button
						className={setting.className}
						onClick={() => setting.handler(data)}
					>
						{setting.label}
					</button>
				</Authorization>
			);
	}
};

export default TableAction;
