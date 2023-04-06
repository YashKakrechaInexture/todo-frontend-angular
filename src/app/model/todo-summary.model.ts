export class TodoSummary {
    TODO: number;
    IN_PROGRESS: number;
    COMPLETED: number;
    ON_HOLD: number;
    CANCELLED: number;
    OVERDUE: number;

    constructor(TODO: number, IN_PROGRESS: number, COMPLETED: number, ON_HOLD: number, CANCELLED: number, OVERDUE: number){
        this.TODO = TODO;
        this.IN_PROGRESS = IN_PROGRESS;
        this.COMPLETED = COMPLETED;
        this.ON_HOLD = ON_HOLD;
        this.CANCELLED = CANCELLED;
        this.OVERDUE = OVERDUE;
    }
}
