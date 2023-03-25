

export function convention_to_reg_address(convention: string): number {
    if (convention[0] !== "$" || convention.length > 3) return 33; // error

    //zero
    if (convention[1] === "0") return 0;

    // return values
    else if (convention[1] === "v") {
        if (convention[2] === "0") {
            return 2;
        } 
        else if (convention[2] === "1") {
            return 3;
        }
    }
    // procedure arguments & reserved temp
    else if (convention[1] === "a") {
        // 4-7
        if (convention[2] === "0") {
            return 4;
        } 
        else if (convention[2] === "1") {
            return 5;
        }
        else if (convention[2] === "2") {
            return 6;
        } 
        else if (convention[2] === "3") {
            return 7;
        }
        else if (convention[2] === "t") {
            return 1;
        }
    }
    // caller save
    else if (convention[1] === "t") {
        // 8-15 + 24-25
        if (convention[2] === "0") {
            return 8;
        } 
        else if (convention[2] === "1") {
            return 9;
        }
        else if (convention[2] === "2") {
            return 10;
        } 
        else if (convention[2] === "3") {
            return 11;
        }
        else if (convention[2] === "4") {
            return 12;
        }
        else if (convention[2] === "5") {
            return 13;
        }
        else if (convention[2] === "6") {
            return 14;
        } 
        else if (convention[2] === "7") {
            return 15;
        }
        else if (convention[2] === "8") {
            return 24;
        }
        else if (convention[2] === "9") {
            return 25;
        }
    }
    //Callee save & stack pointer
    else if (convention[1] === "s") {
        //16 - 23 + 29
        if (convention[2] === "0") {
            return 16;
        } 
        else if (convention[2] === "1") {
            return 17;
        }
        else if (convention[2] === "2") {
            return 18;
        } 
        else if (convention[2] === "3") {
            return 19;
        }
        else if (convention[2] === "4") {
            return 20;
        }
        else if (convention[2] === "5") {
            return 21;
        }
        else if (convention[2] === "6") {
            return 22;
        }
        else if (convention[2] === "7") {
            return 23;
        }
        else if (convention[2] === "p") {
            return 29;
        }
        
    }
    // reserved for operating sys
    else if (convention[1] === "k") {
        if (convention[2] === "0") return 26;
        else if ( convention[2] === "1") return 27;
    }
    // global pinter
    else if (convention[1] === "g") {
        if (convention[2] === "p") return 28;
    }
    // frame pointer
    else if (convention[1] === "f") {
        if (convention[2] === "p") return 30;
    }
    // return address
    else if (convention[1] === "r") {
        if (convention[2] === "a") return 31;
    }
    return 33;
}

function check_conversion(reg_address: number): number | string {
    if (reg_address === 33) return "error";
    return reg_address;
}