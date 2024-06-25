//your JS code here. If required.
const tableBody=document.getElementById('output')

tableBody.innerHTML=`
	<tr>
		<td colspan="2">Loading...</td>
	</tr>
`

const promise1=()=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>res({name:"Promise 1",time:1000}),1000)
	})
}
const promise2=()=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>res({name:"Promise 2",time:500}),500)
	})
}
const promise3=()=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>res({name:"Promise 3",time:700}),700)
	})
}

const finalPromise=()=>{
	 return Promise.all([promise1,promise2,promise3])
}

finalPromise()
	.then((values)=>{
		const total=values.reduce((acc,curr)=>acc+curr.time)
		
		const tableRows=values.map((value)=>(
			`
			<tr>
				<td>${value.name}</td>
				<td>${value.time}</td>
			</tr>
		   `
		)).join(' ')

		tableBody.innerHTML=`${tableRows} 
			<tr>
				<td>Total</td>
				<td>${total}</td>
			</tr>
		`
		
	})
	.catch((err)=>console.error(err))
	