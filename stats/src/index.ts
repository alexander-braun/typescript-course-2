import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

//Gets the neccessary
const matcher = MatchReader.fromCsv('football.csv');
matcher.load();

//Analyzes the data and creates a summary
const summary = Summary.winsAnalysisHtmlReport('Man United');
summary.buildAndPrintReport(matcher.matches);
