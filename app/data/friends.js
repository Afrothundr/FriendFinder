var friends = [
	{
		name: "Frank Ocean",
		photo: "https://e.snmc.io/lk/l/a/5368d0c67d32a41319e0f76d79c1ff07/6566903.jpg",
		score: [2, 3, 3, 2, 5, 5, 3, 2, 2, 5]
	},
	{
		name: "Cate Blanchett",
		photo: "https://i.ytimg.com/vi/jZ8_rClVHls/maxresdefault.jpg",
		score: [1, 1, 4, 2, 1, 4, 1, 3, 1, 2]
	},
	{
		name: "Jack Black",
		photo: "https://www.famousbirthdays.com/headshots/jack-black-7.jpg",
		score: [4, 5, 5, 5, 5, 4, 1, 1, 4, 3]
	},
	{
		name: "Issa Rae",
		photo: "https://img.wennermedia.com/article-leads-horizontal/gettyimages-585120196-bd21d346-cf64-4dc7-9765-b294554a7f3f.jpg",
		score: [4, 2, 4, 1, 2, 3, 2, 3, 5, 4]
	}
];

//add funtionality to push new user to array of objects
module.exports = friends;
module.exports.push2arr = function(val){
	module.exports.push(val);
};
