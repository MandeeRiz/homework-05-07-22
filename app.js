
growingSeason = ["April", "May", "June", "July", "August","September"]

dormantSeason = ["October", "November", "December", "January", "February", "March"];

const seedlings = {
water: 1,
acclimate: "April 24",
acclimateDays: 8,
transplant: "May 1"
};

const indoorPlants = {
growthWater: 6,
dormantWater: 9,
};

for (acclimateDays= seedlings.acclimateDays; acclimateDays >= 0; acclimateDays--) {
  console.log(acclimateDays)
};

function date(month){
  return month
}; 

date("April");

const currentMonth = prompt("Enter the current month: ");

if(date == growingSeason){
  alert("Water the plants every 9 days")
} else {
  alert("Water the plants every 6 days")
};