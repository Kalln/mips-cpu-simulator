type register_file = Array<number>;

const empty_register_slot: number = 0b000;
const non_empty_register_slot: number = 0b101;

function is_valid_register_adress(ra: number): boolean {
    return ra.toString(2).length <=6 || ra.toString(2).length >= 0;
}

function is_valid_register_value(rv: number): boolean {
    return rv.toString(2).length <= 32 || rv.toString(2).length >= 0;
}

function create_empty_register_file(): register_file {
    let rf: Array<number> = [];
    for (let i = 0; i < 32; i++) {
        rf[i] = 0;
    }
    return rf;
}

function move_to_registry(reg_address: number, value: number, rf: register_file): register_file {
    // check if reg addres is $zero, not allowed to be changed.
    if (reg_address === 0) return rf; 
    rf[reg_address] = value;
    return rf;
}

const rf = create_empty_register_file();
console.log(move_to_registry(0, 5, rf));
console.log(move_to_registry(1, 5, rf));