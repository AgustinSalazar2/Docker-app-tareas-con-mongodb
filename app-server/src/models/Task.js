import { model, Schema } from 'mongoose';

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    finished: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    }
},{
    versionKey: false,
    timestamps: true
});

export default model('Tasks', TaskSchema);