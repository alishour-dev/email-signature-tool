import type { SignatureProps } from "@/types"
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter"

export const FirstStyle = ({
	logo,
	website,
	name,
	position,
	location,
	tel,
	email,
	colors,
	linkedIn,
	skype,
	teams,
}: SignatureProps) => (
	<table
		cellPadding='0'
		cellSpacing='0'
		style={{
			fontFamily: "Arial, Helvetica, sans-serif",
			lineHeight: "0px",
			fontSize: "1px",
			padding: "0px !important",
			borderSpacing: "0px",
			margin: "0px",
			borderCollapse: "collapse",
			border: "0",
		}}>
		<tbody>
			<tr>
				<td style={{ padding: "0px !important" }}>
					<table
						cellPadding='0'
						cellSpacing='0'
						style={{
							fontFamily: "Arial, Helvetica, sans-serif",
							lineHeight: "0px",
							fontSize: "1px",
							padding: "0px !important",
							borderSpacing: "0px",
							margin: "0px",
							borderCollapse: "collapse",
							border: "0",
						}}>
						<tbody>
							<tr>
								<td width='150' style={{ padding: "0px !important" }}>
									<a href={website}>
										<img width='150' alt='Company Logo' src={logo} />
									</a>
								</td>
								<td width='15' style={{ borderCollapse: "collapse", paddingRight: "15px", width: "15px" }} />
								<td
									width='1'
									style={{
										borderCollapse: "collapse",
										backgroundColor: colors.collapse,
										width: 1,
										verticalAlign: "super",
										padding: "0px !important",
									}}
								/>
								<td width='15' style={{ borderCollapse: "collapse", paddingRight: 15, width: 15 }} />
								<td style={{ padding: "0px !important" }}>
									<table
										cellPadding='0'
										cellSpacing='0'
										style={{
											fontFamily: "Arial, Helvetica, sans-serif",
											lineHeight: "0px",
											fontSize: "1px",
											padding: "0px !important",
											borderSpacing: "0px",
											margin: 0,
											borderCollapse: "collapse",
											border: "0",
										}}>
										<tbody>
											<tr>
												<td style={{ padding: "0px !important" }}>
													<table
														cellPadding='0'
														cellSpacing='0'
														style={{
															fontFamily: "Arial, Helvetica, sans-serif",
															lineHeight: "0px",
															fontSize: "1px",
															padding: "0px !important",
															borderSpacing: "0px",
															margin: 0,
															borderCollapse: "collapse",
															border: "0",
														}}>
														<tbody>
															<tr>
																<td
																	style={{
																		fontFamily: "Arial, Helvetica, sans-serif",
																		borderCollapse: "collapse",
																		fontSize: 18,
																		fontStyle: "normal",
																		lineHeight: "20px",
																		fontWeight: "700",
																		padding: "0px !important",
																	}}>
																	<span
																		style={{
																			fontFamily: "Arial, Helvetica, sans-serif",
																			fontSize: 18,
																			fontStyle: "normal",
																			lineHeight: "20px",
																			fontWeight: "700",
																			color: colors.name,
																			display: "inline",
																		}}>
																		{capitalizeFirstLetter(name)}
																	</span>
																</td>

																{!!linkedIn && (
																	<SocialIcon
																		href={linkedIn}
																		alt='linkedin'
																		src='https://res.cloudinary.com/dqzqsamx0/image/upload/v1696241137/Signature/linkedin-icon_r3nqxw.png'
																	/>
																)}

																{!!skype && (
																	<SocialIcon
																		href={skype}
																		alt='skype'
																		src='https://res.cloudinary.com/dqzqsamx0/image/upload/v1696241137/Signature/skype-icon_xqjs9l.png'
																	/>
																)}

																{!!teams && (
																	<SocialIcon
																		href={teams}
																		alt='teams'
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
																		lineHeight: "14px",
																		fontWeight: "400",
																		padding: "0px !important",
																	}}>
																	<span
																		style={{
																			fontFamily: "Arial, Helvetica, sans-serif",
																			fontSize: "14px",
																			fontStyle: "normal",
																			lineHeight: "16px",
																			fontWeight: "400",
																			color: colors.position,
																			display: "inline",
																		}}>
																		{capitalizeFirstLetter(position)}
																	</span>
																</td>
															</tr>
															<Hr pb={10} h={10} />
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
															fontFamily: "Arial, Helvetica, sans-serif",
															lineHeight: "0px",
															fontSize: "1px",
															padding: "0px !important",
															borderSpacing: "0px",
															margin: "0px",
															borderCollapse: "collapse",
															border: "0",
														}}>
														<tbody>
															<InfoRow
																src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237146/Icons/tel_vhktpx.png'
																alt='phone'
																href={`tel:${tel}`}
																label={`+${tel}`}
																color={colors.text}
															/>
															<Hr />
															<InfoRow
																src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237838/Icons/email_win1q1.png'
																alt='email'
																href={`mailto:${email}`}
																label={email}
																color={colors.text}
															/>
															<Hr />
															<InfoRow
																src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1657172432/Icons/location_wvy6ne.png'
																alt='location'
																href={location?.href}
																label={location?.label}
																color={colors.text}
															/>
															<Hr />
															<InfoRow
																src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237488/Icons/website_simu4o.png'
																alt='website'
																href={website}
																label={website}
																color={colors.text}
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

const SocialIcon = ({ href, src, alt }: Record<"href" | "src" | "alt", string>) => (
	<>
		<td style={{ borderCollapse: "collapse", paddingRight: 5, width: 5 }} />
		<td style={{ padding: "0px !important" }}>
			<a href={href}>
				<img src={src} alt={alt} height='24' width='24' />
			</a>
		</td>
	</>
)

const InfoRow = ({ src, alt, color, label, href }: Record<"src" | "alt" | "color" | "label" | "href", string>) => (
	<tr>
		<td
			style={{
				borderCollapse: "collapse",
				fontFamily: "Arial, Helvetica, sans-serif",
				fontSize: 12,
				fontStyle: "normal",
				lineHeight: "12px",
				fontWeight: "400",
				padding: "0px !important",
			}}>
			<img height='12' width='14' src={src} alt={alt} />
		</td>
		<td width='14' style={{ borderCollapse: "collapse", paddingRight: 14, width: 14 }} />
		<td>
			<a
				href={href}
				color='#000000'
				style={{
					fontFamily: "Arial, Helvetica, sans-serif",
					fontSize: 12,
					fontStyle: "normal",
					lineHeight: "12px",
					fontWeight: "400",
					color,
					display: "inline",
					textDecoration: "none",
				}}>
				{label}
			</a>
		</td>
	</tr>
)

const Hr = ({ pb = 3, h = 3 }: { pb?: number; h?: number }) => (
	<tr>
		<td style={{ borderCollapse: "collapse", paddingBottom: pb, height: h }} />
	</tr>
)
