import { 
    AllowNull, 
    Column, 
    DataType, 
    Default, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";

@Table({
    underscored: true,
})
export default class Freedom extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @AllowNull(false)
    @Column
    vacationDestination: string;

    @AllowNull(false)
    @Column
    description: string;

    @AllowNull(false)
    @Column(DataType.DATE)
    start: Date;

    @AllowNull(false)
    @Column(DataType.DATE)
    end: Date;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    price: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    imgFreedom: string;
}