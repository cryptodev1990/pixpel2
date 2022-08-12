import React from "react";
import Modal from "../Modal/Modal";
import "./CardModal.scss";

const CardModal = ({ show, handleClose }) => {
	if (!show) {
		return null;
	}
	return (
		<Modal
			header={(
				<button className="btn btn--secondary flex middle gap">
					<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#0095C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#0095C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#0095C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<span>Cart</span>
				</button>
			)}
			handleClose={handleClose}
		>
			<div className="card-modal">
				<div className="flex gap">
					<div className="col-5">
						<div className="flex column h100">
							<div className="fill">
								<img src="assets/images/market/nft-1.jpg" alt="" class="card__picture" />
							</div>
							<button className="btn btn-buy">Buy it now</button>
						</div>
					</div>
					<div className="col-7">
						<h3 className="mb-1">H1 Hero Name for NFT</h3>
						<div className="row-wrap gap mb-1">
							<div className="btn btn--secondary flex middle gap-4">
								<span>Level:</span>
								<span className="card__name">31</span>
							</div>
							<div className="btn btn--secondary flex middle gap-4">
								<span>Attck:</span>
								<span className="card__name">50</span>
							</div>
							<div className="btn btn--secondary flex middle gap-4">
								<span>Defense</span>
								<span className="card__name">60</span>
							</div>
							<div className="btn btn--secondary flex middle gap-4">
								<span>Stealth</span>
								<span className="card__name">128</span>
							</div>
							<div className="btn btn--secondary flex middle gap-4">
								<span>Power</span>
								<span className="card__name">50</span>
							</div>
						</div>
						<div className="mb-1">
							<div className="btn btn--secondary btn-block flex middle justify-between mb">
								<span>Price</span>
								<span className="card__name">$31213241.942</span>
							</div>
							<div className="btn btn--secondary btn-block flex middle justify-between mb">
								<span>Item location</span>
								<span className="card__name">Crypto Bots</span>
							</div>
							<div className="btn btn--secondary btn-block flex middle justify-between mb">
								<span>Blockchain ID</span>
								<div className="flex middle gap">
									<span className="card__name">c478befa...18076d627f</span>
									<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15 6.75H8.25C7.42157 6.75 6.75 7.42157 6.75 8.25V15C6.75 15.8284 7.42157 16.5 8.25 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V8.25C16.5 7.42157 15.8284 6.75 15 6.75Z" stroke="#717A8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M3.75 11.25H3C2.60218 11.25 2.22064 11.092 1.93934 10.8107C1.65804 10.5294 1.5 10.1478 1.5 9.75V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H9.75C10.1478 1.5 10.5294 1.65804 10.8107 1.93934C11.092 2.22064 11.25 2.60218 11.25 3V3.75" stroke="#717A8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</div>
							</div>
						</div>
						<div className="panel">
							<span className="mb-1">Previous Purchase</span>
							<table>
								<thead>
									<tr>
										<th>Price</th>
										<th>USD Price</th>
										<th>Floor Difference</th>
										<th>Expiration</th>
										<th>From</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>12 214 125 PIXP</td>
										<td>$1 252 424</td>
										<td>25% Below</td>
										<td>10 days</td>
										<td>Ivashek big name</td>
									</tr>
									<tr>
										<td>12 214 125 PIXP</td>
										<td>$1 252 424</td>
										<td>25% Below</td>
										<td>10 days</td>
										<td>Ivashek big name</td>
									</tr>
									<tr>
										<td>12 214 125 PIXP</td>
										<td>$1 252 424</td>
										<td>25% Below</td>
										<td>10 days</td>
										<td>Ivashek big name</td>
									</tr>
									<tr>
										<td>12 214 125 PIXP</td>
										<td>$1 252 424</td>
										<td>25% Below</td>
										<td>10 days</td>
										<td>Ivashek big name</td>
									</tr>
									<tr>
										<td>12 214 125 PIXP</td>
										<td>$1 252 424</td>
										<td>25% Below</td>
										<td>10 days</td>
										<td>Ivashek big name</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}
export default CardModal;