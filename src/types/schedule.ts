export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
export type Hour = '8:00-9:00' | '9:00-10:00' | '10:00-11:00' | '11:00-12:00' | '12:00-13:00' | '13:00-14:00' | '14:00-15:00' | '15:00-16:00' | '16:00-17:00' | '17:00-18:00';

export type ColorType = 'glossy' | 'matte' | 'metallic' | 'satin' | 'pearl' | 'neon' | 'pastel' | 'chrome';

export interface Cell {
    subject: string;
    color: string;
    colorType: ColorType;
}

export type Schedule = {
    [key in Day]: {
        [key in Hour]: Cell;
    };
}; 