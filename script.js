var week=prompt ("Working day or Weekend?");

switch (week) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        alert ('Working day');
        break;
    case 'Saturday':
    case 'Sunday':
        alert ('Weekend');
        break;
    default :
        alert ('Can not define, please try another value');
        break; 
}
