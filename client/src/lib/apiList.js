export const server = "http://localhost:9999/api";

const apiList = {
  countHotelsByCity: `${server}/hotels/countByCity?cities=Nairobi,Malindi,Kilifi`,
  countHotelsByType: `${server}/hotels/countByType`,
  getAllHotels: `${server}/hotels?featured=true&limit=4`,
  getSingleHotel: `${server}/hotels/find`,
  getAllHotelRooms: `${server}/hotels/room/`,
  getHotelRoomsAvailability: `${server}/rooms/availability/`,
  userLogin: `${server}/auth/login`,
};

export default apiList;
