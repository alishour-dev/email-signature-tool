import type { SignatureProps } from "@/types"

import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter"

export const FirstStyle = ({
	colors,
	email,
	linkedIn,
	location,
	logo,
	name,
	position,
	skype,
	teams,
	tel,
	website
}: SignatureProps) => (
	<table
		cellPadding='0'
		cellSpacing='0'
		style={{
			border: "0",
			borderCollapse: "collapse",
			borderSpacing: "0px",
			fontFamily: "Arial, Helvetica, sans-serif",
			fontSize: "1px",
			lineHeight: "0px",
			margin: "0px",
			padding: "0px !important"
		}}>
		<tbody>
			<tr>
				<td style={{ padding: "0px !important" }}>
					<table
						cellPadding='0'
						cellSpacing='0'
						style={{
							border: "0",
							borderCollapse: "collapse",
							borderSpacing: "0px",
							fontFamily: "Arial, Helvetica, sans-serif",
							fontSize: "1px",
							lineHeight: "0px",
							margin: "0px",
							padding: "0px !important"
						}}>
						<tbody>
							<tr>
								<td style={{ padding: "0px !important" }} width='150'>
									<a href={website}>
										<img alt='Company Logo' src={logo} width='150' />
									</a>
								</td>
								<td style={{ borderCollapse: "collapse", paddingRight: "15px", width: "15px" }} width='15' />
								<td
									style={{
										backgroundColor: colors.collapse,
										borderCollapse: "collapse",
										padding: "0px !important",
										verticalAlign: "super",
										width: 1
									}}
									width='1'
								/>
								<td style={{ borderCollapse: "collapse", paddingRight: 15, width: 15 }} width='15' />
								<td style={{ padding: "0px !important" }}>
									<table
										cellPadding='0'
										cellSpacing='0'
										style={{
											border: "0",
											borderCollapse: "collapse",
											borderSpacing: "0px",
											fontFamily: "Arial, Helvetica, sans-serif",
											fontSize: "1px",
											lineHeight: "0px",
											margin: 0,
											padding: "0px !important"
										}}>
										<tbody>
											<tr>
												<td style={{ padding: "0px !important" }}>
													<table
														cellPadding='0'
														cellSpacing='0'
														style={{
															border: "0",
															borderCollapse: "collapse",
															borderSpacing: "0px",
															fontFamily: "Arial, Helvetica, sans-serif",
															fontSize: "1px",
															lineHeight: "0px",
															margin: 0,
															padding: "0px !important"
														}}>
														<tbody>
															<tr>
																<td
																	style={{
																		borderCollapse: "collapse",
																		fontFamily: "Arial, Helvetica, sans-serif",
																		fontSize: 18,
																		fontStyle: "normal",
																		fontWeight: "700",
																		lineHeight: "20px",
																		padding: "0px !important"
																	}}>
																	<span
																		style={{
																			color: colors.name,
																			display: "inline",
																			fontFamily: "Arial, Helvetica, sans-serif",
																			fontSize: 18,
																			fontStyle: "normal",
																			fontWeight: "700",
																			lineHeight: "20px"
																		}}>
																		{capitalizeFirstLetter(name)}
																	</span>
																</td>

																{!!linkedIn && (
																	<SocialIcon
																		alt='linkedin'
																		href={linkedIn}
																		src='https://res.cloudinary.com/dqzqsamx0/image/upload/v1696241137/Signature/linkedin-icon_r3nqxw.png'
																	/>
																)}

																{!!skype && (
																	<SocialIcon
																		alt='skype'
																		href={skype}
																		src='https://res.cloudinary.com/dqzqsamx0/image/upload/v1696241137/Signature/skype-icon_xqjs9l.png'
																	/>
																)}

																{!!teams && (
																	<SocialIcon
																		alt='teams'
																		href={teams}
																		src='https://res.cloudinary.com/dqzqsamx0/image/upload/v1696241136/Signature/teams-icon_j7plxs.png'
																	/>
																)}
															</tr>
															<tr>
																<td
																	style={{
																		borderCollapse: "collapse",
																		fontFamily: "Arial, Helvetica, sans-serif",
																		fontSize: "14px",
																		fontStyle: "normal",
																		fontWeight: "400",
																		lineHeight: "14px",
																		padding: "0px !important"
																	}}>
																	<span
																		style={{
																			color: colors.position,
																			display: "inline",
																			fontFamily: "Arial, Helvetica, sans-serif",
																			fontSize: "14px",
																			fontStyle: "normal",
																			fontWeight: "400",
																			lineHeight: "16px"
																		}}>
																		{capitalizeFirstLetter(position)}
																	</span>
																</td>
															</tr>
															<Hr h={10} pb={10} />
														</tbody>
													</table>
												</td>
											</tr>
											<tr>
												<td style={{ padding: "0px !important" }}>
													<table
														cellPadding='0'
														cellSpacing='0'
														style={{
															border: "0",
															borderCollapse: "collapse",
															borderSpacing: "0px",
															fontFamily: "Arial, Helvetica, sans-serif",
															fontSize: "1px",
															lineHeight: "0px",
															margin: "0px",
															padding: "0px !important"
														}}>
														<tbody>
															<InfoRow
																alt='phone'
																color={colors.text}
																href={`tel:${tel}`}
																label={`+${tel}`}
																src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237146/Icons/tel_vhktpx.png'
															/>
															<Hr />
															<InfoRow
																alt='email'
																color={colors.text}
																href={`mailto:${email}`}
																label={email}
																src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237838/Icons/email_win1q1.png'
															/>
															<Hr />
															<InfoRow
																alt='location'
																color={colors.text}
																href={location?.href}
																label={location?.label}
																src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1657172432/Icons/location_wvy6ne.png'
															/>
															<Hr />
															<InfoRow
																alt='website'
																color={colors.text}
																href={website}
																label={website}
																src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237488/Icons/website_simu4o.png'
															/>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
)

const SocialIcon = ({ alt, href, src }: Record<"alt" | "href" | "src", string>) => (
	<>
		<td style={{ borderCollapse: "collapse", paddingRight: 5, width: 5 }} />
		<td style={{ padding: "0px !important" }}>
			<a href={href}>
				<img alt={alt} height='24' src={src} width='24' />
			</a>
		</td>
	</>
)

const InfoRow = ({ alt, color, href, label, src }: Record<"alt" | "color" | "href" | "label" | "src", string>) => (
	<tr>
		<td
			style={{
				borderCollapse: "collapse",
				fontFamily: "Arial, Helvetica, sans-serif",
				fontSize: 12,
				fontStyle: "normal",
				fontWeight: "400",
				lineHeight: "12px",
				padding: "0px !important"
			}}>
			<img alt={alt} height='12' src={src} width='14' />
		</td>
		<td style={{ borderCollapse: "collapse", paddingRight: 14, width: 14 }} width='14' />
		<td>
			<a
				color='#000000'
				href={href}
				style={{
					color,
					display: "inline",
					fontFamily: "Arial, Helvetica, sans-serif",
					fontSize: 12,
					fontStyle: "normal",
					fontWeight: "400",
					lineHeight: "12px",
					textDecoration: "none"
				}}>
				{label}
			</a>
		</td>
	</tr>
)

const Hr = ({ h = 3, pb = 3 }: { h?: number; pb?: number }) => (
	<tr>
		<td style={{ borderCollapse: "collapse", height: h, paddingBottom: pb }} />
	</tr>
)
