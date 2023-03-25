import { convention_to_reg_address } from "./conventions";

//jump
type j_format = {
    opcode: string,
    dest: string;
}

//
type r_format = {
    opcode: string,
    dest: string,
    srcleft: string,
    srcright: string,
    shamt: number,
    funct: number

}

type i_format = {
    opcode: string,
    dest: string,
    srcleft: string,
    immediate: string
}

type bin_instruct = Array<number> | undefined;



// decode instructions
function raw_instruction_to_format(instruction: string): i_format | j_format | r_format | undefined {
    const ins_array: Array<string> = instruction.split(' ');
    if (ins_array.length === 2) {
        const j: j_format = {
            opcode: ins_array[0],
            dest: ins_array[1]
        }
        return j;
    }
    else if (ins_array.length === 6) {
        const r: r_format = {
            opcode: ins_array[0],
            dest: ins_array[1],
            srcleft: ins_array[2],
            srcright: ins_array[3],
            shamt: 0,
            funct: 0
        }
        return r;
    }
    else if (ins_array.length === 4) {
        const i: i_format = {
            opcode: ins_array[0],
            dest: ins_array[1],
            srcleft: ins_array[2],
            immediate: ins_array[3]
        }
        return i;
    }
    else {
        return undefined;
    }
}

function format_to_bin_instruction(inst: i_format | r_format | j_format): bin_instruct {

}

function opcode_bin(op: string): number | undefined {
    if (op === 'add')       return 0b000000;
    else if (op === 'addi') return 0b001000;
    else if (op === 'beq')  return 0b000100;    
    else if (op === 'bne')  return 0b000101;
    else if (op === 'sub')  return 0b000000;
    else return undefined;
    
}

function funct_bin(funct: string): number | undefined {
    if (funct === 'add')       return 0b100000;
    else if (funct === 'sub')  return 0b100010;
    else return undefined;
}

function register_bin(reg: string): number | undefined {
    let addr = convention_to_reg_address(reg);
    if (addr => 0 || addr <= 31) {

    }
}

console.log(raw_instruction_to_format("add R1 R2 R3 0 0"))

// call add

// call sub

//immediate