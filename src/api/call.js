
const placeCall = async (apiContext, callDetails) => {
  const res = await fetch(apiContext.apiAddr + '/api/call', {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${apiContext.accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      pickupLocation: callDetails.pickupLocation,
      dropoffLocation: callDetails.dropoffLocation,
      mileage: callDetails.mileage,
      riderId: callDetails.riderId,
      driverId: callDetails.driverId,
    }),
  });
};

const getCalls = async (apiContext, status) => {
  const res = await fetch(apiContext.apiAddr + '/api/call?status=' + status, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiContext.accessToken}`,
    },
  }).then((data) => data.json());

  return res;
};

module.exports = {
  placeCall,
  getCalls,
};
