import React, {CSSProperties} from "react";
import "./index.css"

interface DataGridProps {
    orientation?: 'horizontal' | 'vertical'
    items: any[]
    detailsExpr?: string
    labelExpr?: string
    detailsRender?: React.ReactNode
    labelRender?: React.ReactNode
    labelAlign?: CSSProperties['textAlign']
    gap?: CSSProperties['gridGap']
    labelWidth?: CSSProperties['width']
    detailsWidth?: CSSProperties['width']
}

export const DescriptionItemsGrid = (props: DataGridProps) => {
    const {detailsExpr = 'label', labelExpr = 'details', orientation = 'vertical'} = props;

    return (
        <div
            className={'tui-description-items'}
            data-orientation={orientation}
            style={{
                //@ts-ignore
                "--tui-description-items-gap": props?.gap,
                "--tui-description-item-label-width": props?.labelWidth,
                "--tui-description-item-details-width": props?.detailsWidth,
            }}
        >
            {
                props.items.map((value) => {
                    const descriptionLabel = value[detailsExpr];
                    const descriptionValue = value[labelExpr];
                    return (
                        <div className="tui-description-item" key={descriptionLabel}>
                            <div className="tui-description-item-label"
                                 style={{textAlign: props?.labelAlign}}>{props?.detailsRender ?? descriptionLabel}</div>
                            <div className="tui-description-item-details">{props?.labelRender ?? descriptionValue}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}