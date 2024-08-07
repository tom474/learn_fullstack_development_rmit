// This script simulates my account data processing tasks

const myAccount = {
	firstName: "Cuong",
	lastName: "Tran",
	address: "RMIT",
};

// Get my account
export async function getMyAccount() {
	return new Promise((resolve) => {
		setTimeout(() => resolve(myAccount), 1000);
	});
}

// Update my account
export async function updateMyAccount(newData) {
	return new Promise((resolve) => {
		setTimeout(() => {
			myAccount.firstName = newData.firstName;
			myAccount.lastName = newData.lastName;
			myAccount.address = newData.address;
			resolve(myAccount);
		}, 1000);
	});
}
