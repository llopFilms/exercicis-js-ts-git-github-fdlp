import { useState } from "react";
import ItemList from "../ItemList";

const initialList = [
	{
		id: 0,
		title: "Big Bellies",
		seen: false,
	},
	{
		id: 1,
		title: "Lunar Landscape",
		seen: false,
	},
	{
		id: 2,
		title: "Terracotta Army",
		seen: true,
	},
];

const BucketList = () => {
	const [myList, setMyList] = useState(initialList);
	const [yourList, setYourList] = useState(initialList);
	console.log(myList, yourList);

	const handleToggleMyList = (idItem, checked) => {
		setMyList((prev) => prev.map((item) => idItem === item.id ? { ...item, seen: checked } : item));
	};

	const handleToggleYourList = (idItem, checked) => {
		setYourList((prev) => {
			return prev.map((item) => {
				return idItem === item.id ? { ...item, seen: checked } : item;
			});
		});
	};

	return (
		<div>
			<h3>Bucket List</h3>
			<p>My list of art to see:</p>
			<ItemList list={myList} handleToggle={handleToggleMyList} />
			<p>Your list of art to see:</p>
			<ItemList list={yourList} handleToggle={handleToggleYourList} />
		</div>
	);
};

export default BucketList;
