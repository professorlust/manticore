/// <reference path="../../vendor/react.d.ts" />

/// <reference path="strings.ts" />

module manticore.ui.results {
    "use strict";
    import _ = manticore.ui.strings._; 

    class Allocation extends React.Component<{ alloc: data.Allocation, showCount?: boolean }, undefined> {
        public render() {
            const alloc = this.props.alloc;
            const className = `allocation ${alloc.monster.size}`;

            return (
                <div className={className}>
                    <div className="kind">
                        { _(alloc.monster.kind) }
                        <span className="level">{ alloc.monster.level }</span>
                        <span className="book">{ alloc.monster.book }</span>
                    </div>
                    <em>{ _(alloc.monster.name) }</em>
                    <span className="number">{ this.props.showCount !== false ? alloc.num : "" }</span>
                </div>
            );
        }
    }


    class AllocationGroup extends React.Component<{ encounters: data.Encounters }, undefined> {
        public render() {
            if (this.props.encounters.length === 1) {
                return <li className="single-encounter">{ this.props.encounters[0].map(alloc => <Allocation alloc={alloc} />) }</li>;
            }
            return (
                <li style={{clear: "left"}}>
                    <div className="allocation-group">
                        <div>
                            {this.props.encounters[0].map(alloc => <Allocation alloc={alloc} showCount={false}/>) }

                            <ul style={{clear: "left"}}>
                                { this.props.encounters.map(enc => 
                                    <li className="clearfix">
                                        { enc.map(alloc => <Allocation alloc={alloc} />) }
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </li>
            );
        } 
    }


    interface ResultsProps {
        onRequestGenerate?:()=>void;
        generatedEncounters?: data.GroupedEncounters;
        party?: data.IParty; 
    }

    interface ResultsState {
        stale: boolean;
        allocs: data.GroupedEncounters;
        show: number;
    }

    export class Results extends React.Component<ResultsProps, ResultsState> {
        public onRequestGenerate = new Event<null>();


        constructor(props: ResultsProps) {
            super(props);

            this.state = {
                stale: true,
                allocs: [],
                show: 100,
            };
        }

        public render() {           
            const allocs = (this.props.generatedEncounters || []).slice(0, this.state.show);
            const party = this.props.party || { level: 0, size: 0 };

            return (
                <section className="results">
                    <header>
                        <h1>{ _("Encounters") }</h1>
                        <p>{ _("[results summary]") }</p>
                    </header>
                    <div className="button generate" onClick={ (_) => this.generateClicked() }>{_("generate encounters") }</div>

                    <section class="encounters">
                        <header>
                            <h1>{ _("Possible encounters") }</h1>
                            <p>{ template(_("{count} encounters for {num} level {level} characters."),
                                                   {count: allocs.length,
                                                    num: party.size,
                                                    level: party.level}) }
                            </p>
                        </header>

                        <ul className={`encounters ${this.state && this.state.stale ? 'outofdate' : ''}` }>
                        { allocs.map(alloc => <AllocationGroup encounters={alloc} />) }
                        </ul>
                    </section>
                </section>
            );
        }

        private generateClicked() {
            this.onRequestGenerate.trigger(null);
            if (this.props.onRequestGenerate) this.props.onRequestGenerate();
        }
    }
}