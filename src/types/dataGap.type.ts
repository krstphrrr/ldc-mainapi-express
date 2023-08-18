type DataGap = {
  
  take?: number;

  
  cursor?: number;

  
  rid: number;

  
  PrimaryKey: string;

  
  DBKey: string;

  
  ProjectKey: string;

  
  RecType: string;

  
  SeqNo: number;

  
  GapStart: number;

  
  GapEnd: number;

  
  Gap: number;

  
  LineKey: string;

  
  RecKey: string;

  
  FormDate: Date;

  
  DateModified: Date;

  
  FormType: string;

  
  Direction: string;

  
  Measure: number;

  
  LineLengthAmount: number;

  
  GapMin: number;

  
  GapData: number;

  
  PerennialsCanopy: string;

  
  AnnualGrassesCanopy: string;

  
  AnnualForbsCanopy: string;

  
  OtherCanopy: string;

  
  Notes: string;

  
  NoCanopyGaps: number;

  
  NoBasalGaps: number;

  
  DateLoadedInDb: Date;

  
  PerennialsBasal: string;

  
  AnnualGrassesBasal: string;

  
  AnnualForbsBasal: string;

  
  OtherBasal: string;

  
  source: string;

  
  DateVisited: Date;
}

export default DataGap