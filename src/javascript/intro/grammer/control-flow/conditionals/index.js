export const greeting = (age = 0) => {
    if(age >= 18) {
      return 'Hello!'
    }
    else {
      return 'Yo!'
    }


};

export const isTacoTuesday = (day = '') => {
    switch (day) {
      case 'tuesday':
        return true;
      break;
      case 'monday':
      case 'wednesday':
      case 'thursday':
      case 'friday':
      case 'saturday':
      case 'sunday':
        return false;
      break;

    }
};

