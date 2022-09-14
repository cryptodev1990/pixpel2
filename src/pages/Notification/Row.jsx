import React from 'react';

const Row = () => {
  return(
    <div className="flex flex-row justify-between pb-2 mt-5 border-b-2 border-app-black">
	  	<div className="w-3/4">
	  		<div className="flex flex-row items-center gap-4">
	  			<input type="checkbox" className="appearance-none checked:bg-blue-500" />
	  			<div className="text-lg font-semibold">
	  			  Withdraw
	  			</div>
	  		</div>
	  		<div className="text-sm text-gray-500 truncate pl-9">
	  			You have successfully withdraw 021100757 BNB at 2022-04-23 16:03:43(UTC). If this activity is not your own, please do not care about that.
	  		</div>
	  	</div>
	  	<div className="flex items-center text-xs text-gray-500">
	  		2022-04023 11:02:43
	  	</div>
    </div>
  )
};

export default Row;
