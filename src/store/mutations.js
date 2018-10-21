import * as Types from './mutations-type.js'
const mutations = {
	[Types.ADD_CART](state,book){
		console.log(book)
		//books是添加的一本书，如果有这本书，累加的是数量，如果没有，数量为1
		let product = state.carlist.find(item=>item.bookId===book.bookId);

		if (product) {
			//有这本书了  数量加1，更新state的数组
			book.bookCount+=1;
			state.carlist=[...state.carlist];
			
		}else{
			book.bookCount =1;
			//用新数组替换老数组
			 
			state.carlist=[...state.carlist,book]

		}

	}
};
export default mutations